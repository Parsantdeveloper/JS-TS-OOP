
 class EmailSerice{
    send(msg){
        console.log(`Email sent with message: ${msg}`);
    }
 }

 class SMSService{
    send(msg){
        console.log(`SMS sent with message: ${msg}`);
    }
    }

    let e = new EmailSerice();
    let s = new SMSService();
    e.send("hello from email service");
    s.send("hello from sms service");