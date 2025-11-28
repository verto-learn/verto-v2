// src/hooks/useDemoData.ts
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-toastify';

interface DemoData {
  message: string;
}

export const useDemoData = () => {
  const { data, isLoading, error } = useQuery<DemoData>({
    queryKey: ['demo-data'],
    queryFn: async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { message: "Hello from React Query!" };
    }
  });

  const showToast = () => {
    toast.success("Toastify berhasil dipasang! 🚀");
  };

  return {
    data,
    isLoading,
    error,
    showToast
  };
};