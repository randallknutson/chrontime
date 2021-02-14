import { expect } from "chai";
import { Chron } from "./Chron";

describe("Chron", () => {
  describe('String parsing', () => {
    it("A Fails", async () => {
      expect(() => {
        const chron = new Chron('A:0');
      }).to.throw('Invalid time string');
    });

    it("2021LD:0 Fails", async () => {
      expect(() => {
        const chron = new Chron('2021LD:0');
      }).to.throw('Invalid time string');
    });

    it("2021AD:0 Fails", async () => {
      expect(() => {
        const chron = new Chron('2021AD:0');
      }).to.throw('Invalid time string');
    });

    it("-2000A1:0", async () => {
      const chron = new Chron('-2000A1:0');
      expect(chron.toString()).to.equal("-2000A1:0");
      // expect(chron.toDate().toISOString()).to.equal('-2000-01-01T00:00:00.000Z');
    });

    it("-1000A1:0", async () => {
      const chron = new Chron('-1000A1:0');
      expect(chron.toString()).to.equal("-1000A1:0");
      // expect(chron.toDate().toISOString()).to.equal('-1000-01-01T00:00:00.000Z');
    });

    it("-100A1:0", async () => {
      const chron = new Chron('-100A1:0');
      expect(chron.toString()).to.equal("-100A1:0");
      // expect(chron.toDate().toISOString()).to.equal('-100-01-01T00:00:00.000Z');
    });

    it("-10A1:0", async () => {
      const chron = new Chron('-10A1:0');
      expect(chron.toString()).to.equal("-10A1:0");
      // expect(chron.toDate().toISOString()).to.equal('-10-01-01T00:00:00.000Z');
    });

    it("-1A1:0", async () => {
      const chron = new Chron('-1A1:0');
      expect(chron.toString()).to.equal("-1A1:0");
      // expect(chron.toDate().toISOString()).to.equal('-1-01-01T00:00:00.000Z');
    });

    it("1A1:0", async () => {
      const chron = new Chron('1A1:0');
      expect(chron.toString()).to.equal("1A1:0");
      // expect(chron.toDate().toISOString()).to.equal('1-01-01T00:00:00.000Z');
    });

    it("10A1:0", async () => {
      const chron = new Chron('10A1:0');
      expect(chron.toString()).to.equal("10A1:0");
      // expect(chron.toDate().toISOString()).to.equal('10-01-01T00:00:00.000Z');
    });

    it("100A1:0", async () => {
      const chron = new Chron('100A1:0');
      expect(chron.toString()).to.equal("100A1:0");
      // expect(chron.toDate().toISOString()).to.equal('100-01-01T00:00:00.000Z');
    });

    it("1000A1:0", async () => {
      const chron = new Chron('1000A1:0');
      expect(chron.toString()).to.equal("1000A1:0");
      expect(chron.toDate().toISOString()).to.equal('1000-01-01T00:00:00.000Z');
    });

    it("1969YD:0", async () => {
      const chron = new Chron('1969YD:0');
      expect(chron.toString()).to.equal("1969YD:0");
      expect(chron.toDate().toISOString()).to.equal('1969-12-31T00:00:00.000Z');
    });

    it("1970A1:0", async () => {
      const chron = new Chron('1970A1:0');
      expect(chron.toString()).to.equal("1970A1:0");
      expect(chron.toDate().toISOString()).to.equal('1970-01-01T00:00:00.000Z');
    });

    it("2020A1:0", async () => {
      const chron = new Chron('2020A1:0');
      expect(chron.toString()).to.equal("2020A1:0");
      expect(chron.toDate().toISOString()).to.equal('2020-01-01T00:00:00.000Z');
    });

    it("2020A2:0", async () => {
      const chron = new Chron('2020A2:0');
      expect(chron.toString()).to.equal("2020A2:0");
      expect(chron.toDate().toISOString()).to.equal('2020-01-02T00:00:00.000Z');
    });

    it("2020YD:0", async () => {
      const chron = new Chron('2020YD:0');
      expect(chron.toString()).to.equal("2020YD:0");
      expect(chron.toDate().toISOString()).to.equal('2020-12-30T00:00:00.000Z');
    });

    it("2020LD:0", async () => {
      const chron = new Chron('2020LD:0');
      expect(chron.toString()).to.equal("2020LD:0");
      expect(chron.toDate().toISOString()).to.equal('2020-12-31T00:00:00.000Z');
    });

    it("2021A1:0", async () => {
      const chron = new Chron('2021A1:0');
      expect(chron.toString()).to.equal("2021A1:0");
      expect(chron.toDate().toISOString()).to.equal('2021-01-01T00:00:00.000Z');
    });

    it("2021C9:0", async () => {
      const chron = new Chron('2021C9:0');
      expect(chron.toString()).to.equal("2021C9:0");
      expect(chron.toDate().toISOString()).to.equal('2021-02-06T00:00:00.000Z');
    });

    it("2020E3:0", async () => {
      const chron = new Chron('2020E3:0');
      expect(chron.toString()).to.equal("2020E3:0");
      expect(chron.toDate().toISOString()).to.equal('2020-02-28T00:00:00.000Z');
    });

    it("2020E4:0", async () => {
      const chron = new Chron('2020E4:0');
      expect(chron.toString()).to.equal("2020E4:0");
      expect(chron.toDate().toISOString()).to.equal('2020-02-29T00:00:00.000Z');
    });

    it("2021E3:0", async () => {
      const chron = new Chron('2021E3:0');
      expect(chron.toString()).to.equal("2021E3:0");
      expect(chron.toDate().toISOString()).to.equal('2021-02-28T00:00:00.000Z');
    });

    it("2021E4:0", async () => {
      const chron = new Chron('2021E4:0');
      expect(chron.toString()).to.equal("2021E4:0");
      expect(chron.toDate().toISOString()).to.equal('2021-03-01T00:00:00.000Z');
    });

    it("2021Z14:0", async () => {
      const chron = new Chron('2021Z14:0');
      expect(chron.toString()).to.equal("2021Z14:0");
      expect(chron.toDate().toISOString()).to.equal('2021-12-30T00:00:00.000Z');
    });

    it("2021YD:0", async () => {
      const chron = new Chron('2021YD:0');
      expect(chron.toString()).to.equal("2021YD:0");
      expect(chron.toDate().toISOString()).to.equal('2021-12-31T00:00:00.000Z');
    });
  });
  describe("Date conversions", () => {
    it("January 1, 2020", async () => {
      const chron = new Chron(new Date("2020-01-01T00:00:00Z"));
      expect(chron.toString()).to.equal("2020A1:0");
      expect(chron.toDate().toISOString()).to.equal('2020-01-01T00:00:00.000Z');
    });

    it("January 2, 2020", async () => {
      const chron = new Chron(new Date("2020-01-02T00:00:00Z"));
      expect(chron.toString()).to.equal("2020A2:0");
      expect(chron.toDate().toISOString()).to.equal('2020-01-02T00:00:00.000Z');
    });

    it("February 28, 2020", async () => {
      const chron = new Chron(new Date("2020-02-28T00:00:00Z"));
      expect(chron.toString()).to.equal("2020E3:0");
      expect(chron.toDate().toISOString()).to.equal('2020-02-28T00:00:00.000Z');
    });

    it("February 29, 2020", async () => {
      const chron = new Chron(new Date("2020-02-29T00:00:00Z"));
      expect(chron.toString()).to.equal("2020E4:0");
      expect(chron.toDate().toISOString()).to.equal('2020-02-29T00:00:00.000Z');
    });

    it("March 1, 2020", async () => {
      const chron = new Chron(new Date("2020-03-01T00:00:00Z"));
      expect(chron.toString()).to.equal("2020E5:0");
      expect(chron.toDate().toISOString()).to.equal('2020-03-01T00:00:00.000Z');
    });

    it("June 14, 2020", async () => {
      const chron = new Chron(new Date("2020-06-14T00:00:00Z"));
      expect(chron.toString()).to.equal("2020L12:0");
      expect(chron.toDate().toISOString()).to.equal('2020-06-14T00:00:00.000Z');
    });

    it("December 29, 2020", async () => {
      const chron = new Chron(new Date("2020-12-29T00:00:00Z"));
      expect(chron.toString()).to.equal("2020Z14:0");
      expect(chron.toDate().toISOString()).to.equal('2020-12-29T00:00:00.000Z');
    });

    it("December 30, 2020", async () => {
      const chron = new Chron(new Date("2020-12-30T00:00:00Z"));
      expect(chron.toString()).to.equal("2020YD:0");
      expect(chron.toDate().toISOString()).to.equal('2020-12-30T00:00:00.000Z');
    });

    it("December 31, 2020", async () => {
      const chron = new Chron(new Date("2020-12-31T00:00:00Z"));
      expect(chron.toString()).to.equal("2020LD:0");
      expect(chron.toDate().toISOString()).to.equal('2020-12-31T00:00:00.000Z');
    });

    it("January 1, 2021", async () => {
      const chron = new Chron(new Date("2021-01-01T00:00:00Z"));
      expect(chron.toString()).to.equal("2021A1:0");
      expect(chron.toDate().toISOString()).to.equal('2021-01-01T00:00:00.000Z');
    });

    it("January 2, 2021", async () => {
      const chron = new Chron(new Date("2021-01-02T00:00:00Z"));
      expect(chron.toString()).to.equal("2021A2:0");
      expect(chron.toDate().toISOString()).to.equal('2021-01-02T00:00:00.000Z');
    });

    it("January 7, 2021", async () => {
      const chron = new Chron(new Date("2021-01-07T00:00:00Z"));
      expect(chron.toString()).to.equal("2021A7:0");
      expect(chron.toDate().toISOString()).to.equal('2021-01-07T00:00:00.000Z');
    });

    it("January 14, 2021", async () => {
      const chron = new Chron(new Date("2021-01-14T00:00:00Z"));
      expect(chron.toString()).to.equal("2021A14:0");
      expect(chron.toDate().toISOString()).to.equal('2021-01-14T00:00:00.000Z');
    });

    it("January 15, 2021", async () => {
      const chron = new Chron(new Date("2021-01-15T00:00:00Z"));
      expect(chron.toString()).to.equal("2021B1:0");
      expect(chron.toDate().toISOString()).to.equal('2021-01-15T00:00:00.000Z');
    });

    it("January 27, 2021", async () => {
      const chron = new Chron(new Date("2021-01-27T00:00:00Z"));
      expect(chron.toString()).to.equal("2021B13:0");
      expect(chron.toDate().toISOString()).to.equal('2021-01-27T00:00:00.000Z');
    });

    it("January 28, 2021", async () => {
      const chron = new Chron(new Date("2021-01-28T00:00:00Z"));
      expect(chron.toString()).to.equal("2021B14:0");
      expect(chron.toDate().toISOString()).to.equal('2021-01-28T00:00:00.000Z');
    });

    it("January 29, 2021", async () => {
      const chron = new Chron(new Date("2021-01-29T00:00:00Z"));
      expect(chron.toString()).to.equal("2021C1:0");
      expect(chron.toDate().toISOString()).to.equal('2021-01-29T00:00:00.000Z');
    });

    it("February 28, 2021", async () => {
      const chron = new Chron(new Date("2021-02-28T00:00:00Z"));
      expect(chron.toString()).to.equal("2021E3:0");
      expect(chron.toDate().toISOString()).to.equal('2021-02-28T00:00:00.000Z');
    });

    it("February 29, 2021", async () => {
      const chron = new Chron(new Date("2021-02-29T00:00:00Z"));
      expect(chron.toString()).to.equal("2021E4:0");
      expect(chron.toDate().toISOString()).to.equal('2021-03-01T00:00:00.000Z');
    });

    it("March 1, 2021", async () => {
      const chron = new Chron(new Date("2021-03-01T00:00:00Z"));
      expect(chron.toString()).to.equal("2021E4:0");
      expect(chron.toDate().toISOString()).to.equal('2021-03-01T00:00:00.000Z');
    });

    it("June 14, 2021", async () => {
      const chron = new Chron(new Date("2021-06-14T00:00:00Z"));
      expect(chron.toString()).to.equal("2021L11:0");
      expect(chron.toDate().toISOString()).to.equal('2021-06-14T00:00:00.000Z');
    });

    it("December 30, 2021", async () => {
      const chron = new Chron(new Date("2021-12-30T00:00:00Z"));
      expect(chron.toString()).to.equal("2021Z14:0");
      expect(chron.toDate().toISOString()).to.equal('2021-12-30T00:00:00.000Z');
    });

    it("December 31, 2021", async () => {
      const chron = new Chron(new Date("2021-12-31T00:00:00Z"));
      expect(chron.toString()).to.equal("2021YD:0");
      expect(chron.toDate().toISOString()).to.equal('2021-12-31T00:00:00.000Z');
    });
  });
  describe('Time', () => {
    it("2000A1:000", async () => {
      const chron = new Chron('2000A1:000');
      expect(chron.toString()).to.equal("2000A1:0");
      expect(chron.toDate().toISOString()).to.equal('2000-01-01T00:00:00.000Z');
    });

    it("2000A1:001", async () => {
      const chron = new Chron('2000A1:001');
      expect(chron.toString()).to.equal("2000A1:1");
      expect(chron.toDate().toISOString()).to.equal('2000-01-01T00:01:26.400Z');
    });

    it("2000A1:250", async () => {
      const chron = new Chron('2000A1:250');
      expect(chron.toString()).to.equal("2000A1:250");
      expect(chron.toDate().toISOString()).to.equal('2000-01-01T06:00:00.000Z');
    });

    it("2000A1:500", async () => {
      const chron = new Chron('2000A1:500');
      expect(chron.toString()).to.equal("2000A1:500");
      expect(chron.toDate().toISOString()).to.equal('2000-01-01T12:00:00.000Z');
    });

    it("2000A1:750", async () => {
      const chron = new Chron('2000A1:750');
      expect(chron.toString()).to.equal("2000A1:750");
      expect(chron.toDate().toISOString()).to.equal('2000-01-01T18:00:00.000Z');
    });

    it("2000A1:999", async () => {
      const chron = new Chron('2000A1:999');
      expect(chron.toString()).to.equal("2000A1:999");
      expect(chron.toDate().toISOString()).to.equal('2000-01-01T23:58:33.600Z');
    });

    it("Midnight", async () => {
      const chron = new Chron(new Date('2000-01-01T00:00:00.000Z'));
      expect(chron.toString()).to.equal("2000A1:0");
      expect(chron.toDate().toISOString()).to.equal('2000-01-01T00:00:00.000Z');
    });

    it("12:01 AM", async () => {
      const chron = new Chron(new Date('2000-01-01T00:01:00.000Z'));
      expect(chron.toString()).to.equal("2000A1:0.694");
      expect(chron.toDate().toISOString()).to.equal('2000-01-01T00:01:00.000Z');
    });

    it("6:00 AM", async () => {
      const chron = new Chron(new Date('2000-01-01T06:00:00.000Z'));
      expect(chron.toString()).to.equal("2000A1:250");
      expect(chron.toDate().toISOString()).to.equal('2000-01-01T06:00:00.000Z');
    });

    it("12:00 PM", async () => {
      const chron = new Chron(new Date('2000-01-01T12:00:00.000Z'));
      expect(chron.toString()).to.equal("2000A1:500");
      expect(chron.toDate().toISOString()).to.equal('2000-01-01T12:00:00.000Z');
    });

    it("6:00 PM", async () => {
      const chron = new Chron(new Date('2000-01-01T18:00:00.000Z'));
      expect(chron.toString()).to.equal("2000A1:750");
      expect(chron.toDate().toISOString()).to.equal('2000-01-01T18:00:00.000Z');
    });

    it("11:59 PM", async () => {
      const chron = new Chron(new Date('2000-01-01T23:59:00.000Z'));
      expect(chron.toString()).to.equal("2000A1:999.306");
      expect(chron.toDate().toISOString()).to.equal('2000-01-01T23:59:00.000Z');
    });
  });
});
