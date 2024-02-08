import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Example = (props) => {
    return (
        <div style={{ marginBottom: "10%", marginTop: "10%" }}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <CircularProgressbar value={props.percentage} text={`${props.percentage}%`} />
            </div>
        </div>
    )
}

export default Example
