'use client';

import { useTodos } from '@/hooks/useTodo';
import { useState } from 'react';

export default function TodosPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [newTodo, setNewTodo] = useState('');
  const { todos, isLoading, addTodo, isAddingTodo } = useTodos(searchTerm);

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      addTodo(newTodo, {
        onSuccess: () => setNewTodo(''),
      });
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Todos</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search todos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded p-2 w-full"
        />
      </div>

      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Add a new todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="border rounded p-2 flex-1"
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 text-white rounded px-4 py-2 disabled:opacity-50"
          disabled={isAddingTodo}
        >
          {isAddingTodo ? 'Adding...' : 'Add'}
        </button>
      </div>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="border p-4 rounded-md flex justify-between"
            >
              <h2 className="text-lg font-bold">{todo.title}</h2>
              <span>Status: {todo.completed ? 'Completed' : 'Doing'}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}