import TransactionsTRow from "../TransactionsTRow/TransactionsTRow";

const TransactionHistory = ({ items }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => {
          return (
            <tr key={item.id}>
              <TransactionsTRow item={item} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
