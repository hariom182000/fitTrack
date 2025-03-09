import { Stack } from "expo-router";
import React from "react";
import "../global.css";
import { SQLiteDatabase, SQLiteProvider } from "expo-sqlite";
export default function RootLayout() {
  return (
    <SQLiteProvider databaseName="lifts.db" onInit={migrateDbIfNeeded}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(train)" options={{ headerShown: false }} />
      </Stack>
    </SQLiteProvider>
  );
}

async function migrateDbIfNeeded(db: SQLiteDatabase) {
  const DATABASE_VERSION = 1;
  let { user_version: currentDbVersion } = await db.getFirstAsync<{
    user_version: number;
  }>("PRAGMA user_version");
  if (currentDbVersion >= DATABASE_VERSION) {
    return;
  }
  if (currentDbVersion === 0) {
    await db.execAsync(`
PRAGMA journal_mode = 'wal';
CREATE TABLE Lifts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    targetMuscle TEXT NOT NULL,
    weightLifted INTEGER NOT NULL,
    repsDone INTEGER NOT NULL,
    date INTEGER NOT NULL
  );
`);
    currentDbVersion = 1;
  }
  await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
}
