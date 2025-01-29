import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { todosApi } from '@/api/todos';
import type { Todo } from '@/types/todo';

export function useTodos(searchTerm: string) {
  const queryClient = useQueryClient();

  const todosQuery = useQuery({
    queryKey: ['todos', searchTerm] as const,
    queryFn: () => todosApi.fetch(searchTerm),
  });

  const addTodoMutation = useMutation({
    mutationFn: todosApi.add,
    onSuccess: (newTodo: Todo) => {
      // Optimistic update
      queryClient.setQueryData(['todos', searchTerm], (old: Todo[] = []) => [...old, newTodo]);
      // Invalidate to ensure consistency
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });

  return {
    todos: todosQuery.data ?? [],
    isLoading: todosQuery.isLoading,
    addTodo: addTodoMutation.mutate,
    isAddingTodo: addTodoMutation.isPending,
  };
}
