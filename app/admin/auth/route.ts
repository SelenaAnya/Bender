import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
  const { username, password } = await request.json();
  
  // Перевірка користувача в БД
  const user = await db.users.findOne({ username });
  
  if (!user || !await bcrypt.compare(password, user.password)) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }
  
  // Створення токену
  const token = jwt.sign(
    { userId: user.id, role: user.role },
    process.env.JWT_SECRET!,
    { expiresIn: '24h' }
  );
  
  return NextResponse.json({ token });
}