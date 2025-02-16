export default function ForgotPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="bg-card p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-foreground mb-6">Reset Password</h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="form-input"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
} 