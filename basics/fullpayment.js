class Wallet {
    constructor(name) {
        this.name = name;
        this.balance = 5000;
    }
}

class Payment extends Wallet {
    constructor(name, amount) {
        super(name);
        this.amount = amount;
    }

    pay() {
        if (this.amount > this.balance) {
            throw new PaymentError("Insufficient balance", "INSUFFICIENT_BALANCE");
        }

        this.balance -= this.amount;

        return {
            success: true,
            message: `Payment of ${this.amount} successful. Remaining balance: ${this.balance}`,
            data: {
                name: this.name,
                amount: this.amount,
                balance: this.balance,
            },
        };
    }
}

class PaymentError extends Error {
    constructor(message, code, status = 400) {
        super(message);
        this.code = code;
        this.status = status;
    }
}

function paymentController() {
    try {
        const p = new Payment("prashant", 6000);
        const result = p.pay();

        return {
            status: 200,
            body: result,
        };
    } catch (error) {
        return {
            status: error.status || 400,
            body: {
                success: false,
                error: {
                    message: error.message,
                    code: error.code || "UNKNOWN_ERROR",
                },
            },
        };
    }
}



console.log(paymentController())