export default (res, status, message, data, error) => res.status(status).json(
  error ? { status, message, error } : { status, message, data },
);
