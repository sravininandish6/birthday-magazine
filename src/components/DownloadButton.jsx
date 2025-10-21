import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function DownloadButton() {
  const handleDownload = async () => {
    const pages = document.querySelectorAll(".mag-page"); // select all magazine pages
    const pdf = new jsPDF("p", "mm", "a4");

    for (let i = 0; i < pages.length; i++) {
      const canvas = await html2canvas(pages[i], { scale: 2 });
      const imgData = canvas.toDataURL("image/png");

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

      if (i < pages.length - 1) pdf.addPage();
    }

    pdf.save("birthday-magazine.pdf");
  };

  return (
    <button
      onClick={handleDownload}
      className="mt-4 bg-pink-500 text-white px-6 py-2 rounded-xl shadow-lg hover:bg-pink-600 transition"
    >
      📥 Download as PDF
    </button>
  );
}
