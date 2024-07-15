import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

interface PhoneInputProps {
    value: string | undefined
    onChange: (value: string | undefined) => void
}

const CustomPhoneInput = ({value, onChange}: PhoneInputProps) => {
    return (
        <PhoneInput
            inputComponent={(props) => (
                <input {...props} className="input-primary" type="tel" placeholder="Ваш номер телефона" />
            )}
            defaultCountry="UA"
            className="phone-input"
            value={value}
            onChange={onChange}
        />
    );
};

export default CustomPhoneInput;