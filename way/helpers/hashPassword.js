import bcrypytjs from "bcryptjs";

const HashPassword = {
  async encrypt(passwordPlain) {
    const hash = await bcrypytjs.hash(passwordPlain, 10);
    return hash;
  },
  async compare(passwordPlain, hashedPassword) {
    return await bcrypytjs.compare(passwordPlain, hashedPassword);
  },
};

export default HashPassword;