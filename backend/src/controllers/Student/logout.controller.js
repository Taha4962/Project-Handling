export const logoutStudent = (req, res) => {
  // For JWT-based authentication, logout is handled on the client by removing the token.
  // This endpoint simply informs the client to remove the token.
  return res.status(200).json({
    success: true,
    message: "Logout successful. Please remove the token from your client.",
  });
};
