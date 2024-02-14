import { TUserSchema } from '@/lib/schemas/user.schema';
import { UserService } from '@/services/user/user.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  const {
    mutate: updateProfile,
    isPending,
    isSuccess,
    isError,
    status,
    error,
    failureReason,
  } = useMutation({
    mutationKey: ['update profile'],
    mutationFn: async (data: TUserSchema) => UserService.updateProfile(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['profile'],
      });
    },
  });

  return {
    updateProfile,
    isPending,
    isSuccess,
    isError,
    status,
    error,
    failureReason,
  };
};
