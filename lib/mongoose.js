import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!global._mongooseConn) {
  global._mongooseConn = { conn: null, promise: null }
}

export async function connectDB() {
  if (global._mongooseConn.conn) return global._mongooseConn.conn

  if (!global._mongooseConn.promise) {
    global._mongooseConn.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    })
  }

  global._mongooseConn.conn = await global._mongooseConn.promise
  return global._mongooseConn.conn
}
