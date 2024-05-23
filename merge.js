const mergePdfs = async (p1, p2) => {
  const { default: PDFMerger } = await import("pdf-merger-js");
  const merger = new PDFMerger();

  await merger.add(p1); // Add the first PDF
  await merger.add(p2); // Add the second PDF

  await merger.save("public/merged.pdf"); // Save the merged PDF under the given name
};

module.exports = { mergePdfs };
