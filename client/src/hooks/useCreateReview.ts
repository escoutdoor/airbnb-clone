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
    mutationFn: async ({
      apartmentId,
      data,
    }: {
      apartmentId: string;
      data: TCreateReviewSchema;
    }) => ReviewService.create(apartmentId, data),
    onSuccess: () => {
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
