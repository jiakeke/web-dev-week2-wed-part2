// CreditCard.js
import visa from './images/visa.png';
import master from './images/master.png';

function CreditCard(props) {
    let logo = visa;
    let logo_cls = 'logo visa';
    let month = props.expirationMonth;
    if (month > 9) {
        month = month.toString()
    } else {
        month = '0' + month.toString()
    }
    switch (props.type) {
      case 'Visa':
        logo = visa
        break;
      case 'Master Card':
        logo = master
        logo_cls = 'logo master';
        break;
    }

    const cardStyle = {
        backgroundColor: props.bgColor,
        color: props.color,
    }

    return (
    <div className="credit-card" style={cardStyle}>
        <div className={logo_cls}>
            <img src={logo} />
        </div>
        <div className="props">
            <p className="num">
                •••• •••• •••• {props.number.slice(-4)}
            </p>
            <p>
                Expires {month}/{props.expirationYear}
                &nbsp;&nbsp;&nbsp;
                {props.bank}
            </p>
            <p>
                {props.owner}
            </p>
        </div>
    </div>
  );
}

export default CreditCard;
