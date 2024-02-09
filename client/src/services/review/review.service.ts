import { TCreateReviewSchema } from '@/lib/schemas/review.schema';
import { instance } from '../helpers/axios.instance';
import { REVIEWS_URL } from '../helpers/api.constants';

export const ReviewService = {
  async create(apartmentId: string, data: TCreateReviewSchema) {
    await instance({
      method: 'POST',
      data,
      url: `${REVIEWS_URL}/${apartmentId}`,
    });
  },
};
