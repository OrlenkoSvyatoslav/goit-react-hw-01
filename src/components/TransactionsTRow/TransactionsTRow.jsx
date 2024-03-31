import css from "./TransactionsTRow.module.css";

const TransactionsTRow = ({ item: { type, amount, currency } }) => {
  return (
    <>
      <td className={css.tableRowVslue}>{type}</td>
      <td className={css.tableRowVslue}>{amount}</td>
      <td className={css.tableRowVslue}>{currency}</td>
    </>
  );
};

export default TransactionsTRow;
