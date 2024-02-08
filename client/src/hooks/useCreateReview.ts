import { TCreateReviewSchema } from '@/lib/schemas/review.schema';
import { ReviewService } from '@/services/review/review.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateReview = () => {
  const queryClient = useQueryClient();

  const {
    mutate: createReview,
    isPending,
    isError,
    isSuccess,
    status,
  } = useMutation({
    mutationKey: ['create review'],
    mutationFn: async (data: TCreateReviewSchema) => ReviewService.create(data),
    onMutate: () => {
      queryClient.invalidateQueries({
        queryKey: ['apartment'],
      });
    },
  });

  return {
    isPending,
    isError,
    isSuccess,
    status,
    createReview,
  };
};
