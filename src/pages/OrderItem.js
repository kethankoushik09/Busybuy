export default function OrderItem(props){
    const {data} = props;
    return(
        <>
            <div className="order-item">
                <h2>Order on:-{data.date}</h2>
                <table border="2">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>TotalPrice</th>
                        </tr>
                    </thead>
                    
                    {data.ord.map((item,idx)=>(
                        <>
                            <tbody>
                                <tr key={idx}>
                                    <td style={styles.fixedCell}>{item.description}</td>
                                    <td style={styles.cell}>{item.price}</td>
                                    <td style={styles.cell}>{item.qty}</td>
                                    <td style={styles.cell}>{item.price*item.qty}</td>
                                </tr>
                            </tbody>
                            <tfoot>
                            <tr key={idx}>
                                    <td ></td>
                                    <td ></td>
                                    <td ></td>
                                    <td >{data.total}</td>
                                </tr>

                            </tfoot>
                        </>
                    ))}
                </table>

            </div>
        </>
    )
}

const styles = {
    headerCell: {
    //   border: "1px solid black",
      padding: "10px",
      textAlign: "center",
      fontWeight: "bold",
    },
    cell: {
    //   border: "1px solid black",
      padding: "10px",
      textAlign: "center",
    },
    fixedCell: {
        // border: "1px solid black",
        padding: "10px",
        textAlign: "center",
        maxWidth: "200px", // Fixed width
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis", // Adds "..." for overflow
      },
  };