"use client";

import { faker } from "@faker-js/faker";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
  lastActive: string;
  avatar: string;
}

// Set a consistent seed for faker
faker.seed(123);

// Generate mock users data outside the component with fixed dates
const USERS: User[] = Array.from({ length: 10 }, (_, index) => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
  role: faker.helpers.arrayElement(["Admin", "User", "Viewer"]),
  status: faker.helpers.arrayElement(["active", "inactive"]),
  lastActive: new Date(2024, 0, 20 - index).toLocaleDateString(), // dates counting back from Jan 20, 2024
  avatar: faker.image.avatar(),
}));

export default function UsersPage() {
  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Users</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Active</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {USERS.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {user.email}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{user.role}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        user.status === "active" ? "default" : "secondary"
                      }
                      className={
                        user.status === "active"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }
                    >
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.lastActive}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
