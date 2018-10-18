module.exports = (firstname, lastname, order) => (
    `<div style="background:#ddd;">
        <p>TO: ${firstname} ${lastname} </p>
        <p>Hello ${firstname} this is the summary for order number ${order}</p>
    </div>`
)
