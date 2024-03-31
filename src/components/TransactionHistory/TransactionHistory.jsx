import TransactionsTRow from "../TransactionsTRow/TransactionsTRow";
import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.tableContainer}>
      <thead>
        <tr className={css.tableTitle}>
          <th className={css.tableTitleText}>Amount</th>
          <th className={css.tableTitleText}>Currency</th>
          <th className={css.tableTitleText}>Type</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => {
          return (
            <tr className={css.tableValue} key={item.id}>
              <TransactionsTRow item={item} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
