import "jspdf-autotable";
import { format } from "date-fns";
import jsPDF from "jspdf";

const generatePDF = (transactions) => {
  const doc = new jsPDF();

  const tableColumn = ["ID", "Date", "Category", "Description", "Line Total"];
  // const tableColumn = ["Id", "Title", "Issue", "Status", "Closed on"];
  const tableRows = [];

  //Add data
  transactions.forEach((transaction) => {
    const transactionData = [transaction.id, transaction.updated_at, transaction.category, transaction.description, transaction.lineTotal];
    tableRows.push(transactionData);
  });

  //create table
  doc.autoTable(tableColumn, tableRows, { startY: 20 });

  //fill title
  const date = Date().split(" ");
  const sDate = date[0] + date[1] + date[2] + date[3] + date[4];
  doc.text("Closed transactions within the last one month", 14, 15);

  doc.save(`report_${sDate}.pdf`);
};

export default generatePDF;
