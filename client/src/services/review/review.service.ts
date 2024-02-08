import { TCreateReviewSchema } from '@/lib/schemas/review.schema';
import { instance } from '../helpers/axios.instance';
import { REVIEWS_URL } from '../helpers/api.constants';

export const ReviewService = {
  async create(data: TCreateReviewSchema) {
    await instance({
      method: 'POST',
      data,
      url: REVIEWS_URL,
    });
  },
};
