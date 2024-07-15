import {useState, forwardRef, FormEvent} from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const CustomInput = forwardRef<HTMLInputElement, any>((props, ref) => (
    <input {...props} ref={ref} className="input-primary" type="tel" placeholder="Ваш номер телефона" />
));

const Form = () => {

    const [phone, setPhone] = useState<string | undefined>();
    const [name, setName] = useState<string | undefined>();
    const [email, setEmail] = useState<string | undefined>();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const message  = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}`;
        const token = '7483534211:AAHt4TdyMJm5CFTzH0iOzihjv_nhjiMTHxk'
        const chatId = "-4207583184"

        try {
            const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message
                })
            });

            const data = await response.json();
            if (data.ok) {
                alert('Message sent successfully!');
                setEmail("")
                setPhone("")
                setName("")
            } else {
                alert('Error sending message: ' + data.description);
            }
        } catch (error) {
            alert('Error sending message: ' + error);
        }    }


    return (
        <div className="max-w-[366px] max-h-[470px] bg-primary-form rounded-[10px] flex flex-col justify-center items-center gap-[20px] p-14 max-[1020px]:mb-10">
            <h1 className="font-bold text-[21px] text-wrap text-white text-center">
                Запишитесь <span className="text-raspberry">бесплатно</span>
                <br /> и получите подарок
            </h1>
            <form onSubmit={handleSubmit} action="" className="flex flex-col items-center">
                <input type="text" value={name} onChange={e => setName(e.target.value)} required className="input-primary" placeholder="Ваше имя и фамилия" />
                <PhoneInput
                    value={phone}
                    onChange={setPhone}
                    defaultCountry="UA"
                    inputComponent={CustomInput}
                    className="phone-input"
                />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required className="input-primary" placeholder="Ваш email" />
                <button type="submit" className="btn-primary  max-[1020px]:bg-[#0048FF] max-[1020px]:w-[80%]">Записаться бесплатно</button>
            </form>
            <a href="#" className="text-white opacity-50 text-[12px]">
                Нажимая на кнопку я соглашаюсь
                <br />
                <span className="underline">с политикой конфиденциальности</span>
            </a>
        </div>
    );
};

export default Form;
