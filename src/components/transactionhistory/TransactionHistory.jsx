import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <div className={styles.transactionHistory}>
      <table className={styles.transactionTable}>
        <thead className={styles.transactionTitle}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody className={styles.transactionText}>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
