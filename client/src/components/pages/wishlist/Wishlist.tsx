'use client';

import styles from './wishlist.module.scss';
import { NextPage } from 'next';
import { IWishlist } from '@/shared/interfaces/user.interface';
import { HiDotsHorizontal, HiOutlineChevronLeft } from 'react-icons/hi';
import { useRouter } from 'next/navigation';
import { useWishListSettingsModal } from '@/hooks/useWishlistSettingsModal';
import WishlistMap from './wishlist-map/WishlistMap';
import ApartmentList from '@/components/ui/apartment-list/ApartmentList';
import DarkButton from '@/components/ui/dark-button/DarkButton';
import SmallText from '@/components/ui/small-text/SmallText';

const Wishlist: NextPage<{ wishlist: IWishlist }> = ({ wishlist }) => {
  const { open } = useWishListSettingsModal();
  const { push } = useRouter();

  console.log(wishlist);

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.header}>
          <div className={styles.target} onClick={() => push('/wishlists')}>
            <HiOutlineChevronLeft className={styles.icon} />
          </div>
          <div
            className={styles.target}
            onClick={() =>
              open({
                wishlistId: wishlist.id,
                name: wishlist.name,
              })
            }
          >
            <HiDotsHorizontal className={styles.icon} />
          </div>
        </div>
        <div className={styles.content}>
          <h1 className={styles.name}>{wishlist.name}</h1>
          <div className={styles.details}>
            {wishlist.apartments.length ? (
              <ApartmentList apartments={wishlist.apartments} />
            ) : (
              <div className={styles.no__saves}>
                <h2 className={styles.title}>No saves yet</h2>
                <SmallText>
                  As you search, click the heart icon to save your favorite
                  places and Experiences to a wishlist.
                </SmallText>
                <DarkButton onClick={() => push('/')}>
                  Start exploring
                </DarkButton>
              </div>
            )}
          </div>
        </div>
      </div>
      <WishlistMap />
    </div>
  );
};

export default Wishlist;
