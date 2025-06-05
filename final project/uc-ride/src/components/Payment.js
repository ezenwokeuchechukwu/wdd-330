import { PaystackButton } from 'react-paystack';

const Payment = () => {
    const publicKey = "your_paystack_public_key_here";
    const amount = 5000 * 100; // 5,000 Naira in kobo
    const email = "user@example.com";

    const componentProps = {
        email,
        amount,
        publicKey,
        text: "Pay Now",
        onSuccess: () => alert("Payment Successful!"),
        onClose: () => alert("Payment Closed"),
    };

    return <PaystackButton {...componentProps} />;
};

export default Payment;