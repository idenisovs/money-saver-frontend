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
  time: Date;
  date: string;
  // date = Payment.date(this.time);
  sum: number;
  remove?: boolean;
  update?: boolean;
  add?: boolean;

  constructor(value = 0, time = new Date()) {
    this.sum = value;
    this.time = time;
    this.date = Payment.date(this.time);
  }

  record(): PaymentRecord {
    return {
      ...this,
      time: this.time.getTime(),
      date: this.date || Payment.date(this.time),
    };
  }

  static build(record: PaymentRecord): Payment {
    const result = new Payment(record.sum);

    result.id = record.id;
    result.time = new Date(record.time);
    result.date = Payment.date(result.time);

    return result;
  }

  static date(time: Date): string {
    const date: string[] = [];

    date.push(String(time.getFullYear()));
    date.push(Payment.str(time.getMonth() + 1));
    date.push(Payment.str(time.getDate()));

    return date.join('-');
  }

  static str(value: number): string {
    if (value < 10) {
      return `0${value}`;
    } else {
      return value.toString();
    }
  }
}


