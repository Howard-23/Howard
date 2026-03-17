const fs = require("fs");
const path = require("path");

function escapePdfText(value) {
  return String(value)
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)");
}

function createPdf(contentStream) {
  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>",
    `<< /Length ${Buffer.byteLength(contentStream, "utf8")} >>\nstream\n${contentStream}\nendstream`,
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>"
  ];

  let pdf = "%PDF-1.4\n";
  const offsets = [0];

  for (let i = 0; i < objects.length; i += 1) {
    offsets.push(Buffer.byteLength(pdf, "utf8"));
    pdf += `${i + 1} 0 obj\n${objects[i]}\nendobj\n`;
  }

  const xrefOffset = Buffer.byteLength(pdf, "utf8");
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += "0000000000 65535 f \n";

  for (let i = 1; i <= objects.length; i += 1) {
    pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
  }

  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
  return Buffer.from(pdf, "utf8");
}

function buildResumeLines(cv) {
  const lines = [];
  const push = (text, size = 11) => lines.push({ text, size });

  push(cv.personalInfo.name || "Resume", 20);
  push(cv.personalInfo.title || "", 13);
  push(`${cv.personalInfo.email || ""} | ${cv.personalInfo.phone || ""} | ${cv.personalInfo.location || ""}`, 10);
  push("", 8);
  push("PROFESSIONAL SUMMARY", 12);
  push(cv.personalInfo.summary || "", 10);
  push("", 8);
  push("EXPERIENCE", 12);

  for (const exp of cv.experience || []) {
    push(`${exp.role} (${exp.date})`, 10);
    push(exp.company || "", 10);
    push(exp.description || "", 9);
    const responsibilities = Array.isArray(exp.responsibilities) ? exp.responsibilities.slice(0, 2) : [];
    for (const item of responsibilities) {
      push(`- ${item}`, 9);
    }
    push("", 7);
  }

  push("SKILLS", 12);
  for (const [category, skills] of Object.entries(cv.skills || {})) {
    const value = Array.isArray(skills) ? skills.join(", ") : "";
    push(`${category}: ${value}`, 9);
  }

  return lines;
}

function buildContentStream(lines) {
  let y = 800;
  const chunks = [];

  for (const line of lines) {
    if (y < 44) break;
    const text = escapePdfText(line.text);
    chunks.push(`BT /F1 ${line.size} Tf 40 ${y} Td (${text}) Tj ET`);
    y -= line.size + 5;
  }

  return chunks.join("\n");
}

function main() {
  const root = path.resolve(__dirname, "..");
  const cvPath = path.join(root, "data", "cv.json");
  const outputPath = path.join(root, "public", "resume.pdf");

  const cv = JSON.parse(fs.readFileSync(cvPath, "utf8"));
  const lines = buildResumeLines(cv);
  const stream = buildContentStream(lines);
  const pdfBuffer = createPdf(stream);

  fs.writeFileSync(outputPath, pdfBuffer);
  console.log(`Generated ${outputPath} (${pdfBuffer.length} bytes)`);
}

main();
