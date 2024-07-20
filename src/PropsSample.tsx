interface Props {
    name: string;
    color?: string; // optional props
}

export const PropsSample = ({name, color = 'blue'}: Props) => {
    return <div style={{color}}>Hello {name}</div>;
}

// function PropsSample({name, color}: Props) {
//     return <div style={{color}}>Hello {name}</div>;
// }

export default PropsSample;