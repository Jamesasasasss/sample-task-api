CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  details JSONB,
  "createdAt" TIMESTAMP,
  "updatedAt" TIMESTAMP
);
