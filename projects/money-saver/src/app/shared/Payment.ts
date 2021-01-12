export interface PaymentRecord {
  id?: number;
  time?: number;
  date?: string;
  sum: number;
  remove?: boolean;
  update?: boolean;
  add?: boolean;
}

export class Payment {
  id?: number;
  time = new Date();
  date = Payment.date(this.time);
  sum = 0;
  remove?: boolean;
  update?: boolean;
  add?: boolean;

  constructor(value: number) {
    if (value) {
      this.sum = value;
    }
  }

  record(): PaymentRecord {
    return {
      ...this,
      time: this.time.getTime(),
      date: Payment.date(this.time),
    };
  }

  static build(record: PaymentRecord): Payment {
    const result = new Payment(record.sum);

    result.id = record.id;
    result.time = new Date(record.time);
    result.date = Payment.date(result.time);

    return result;
  }

  static date(time: Date) {
    const date: string[] = [];

    date.push(String(time.getFullYear()));
    date.push(Payment.str(time.getMonth() + 1));
    date.push(Payment.str(time.getDate()));

    return date.join('-');
  }

  static str(value: number) {
    if (value < 10) {
      return `0${value}`;
    } else {
      return value.toString();
    }
  }
}


