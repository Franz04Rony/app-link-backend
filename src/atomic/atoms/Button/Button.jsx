import s from './Button.module.css'
import PropTypes from 'prop-types'

export const Button = (
    {label,
    
}) => {
    return (
        <button className = {s.button}>
            {label}
        </button>
    )
}

Button.propTypes = {
    label: PropTypes.string,
}

Button.defaultProps = {
    label: "boton",
}

export default Button