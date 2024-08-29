// BoxColor.js

function BoxColor(props) {
    const RGBToHex = (r, g, b) =>
      ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');

    const hexColor = RGBToHex(props.r, props.g, props.b);
    const boxColor = {
        backgroundColor: '#' + hexColor,
    };

    const getColorByBgColor = (r, g, b) => {
        return (r*0.299 + g*0.587 + b*0.114) > 186 ? '#000000' : '#ffffff';
    }

    const fontColor = {color: getColorByBgColor(props.r, props.g, props.b),};

    return (
    <div className="color-box" style={boxColor}>
        <p style={fontColor}>rgb({props.r},{props.g},{props.b})</p>
        <p style={fontColor}>#{hexColor}</p>
    </div>
  );
}

export default BoxColor;
