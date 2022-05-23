import { Entry } from 'types';
import useInfiniteScrolling from 'hooks/useInfiniteScrolling';
import EntryAbstract from '../EntryAbstract/EntryAbstract';
import Loading from '../../UI/Loading';

interface EntriesListProps {
  entries?: Entry[];
  isLoading: boolean;
  onInfiniteScroll: () => void;
}

const EntriesList = ({ entries, isLoading, onInfiniteScroll }: EntriesListProps) => {
  const infiniteScrollingTriggerRef = useInfiniteScrolling(isLoading, onInfiniteScroll);

  return (
    <>
      {entries?.map((entry, idx) => (
        <EntryAbstract
          entry={entry}
          key={entry.id}
          listMode
          containerRef={idx + 2 === entries.length ? infiniteScrollingTriggerRef : undefined}
        />
      ))}
      {isLoading && <Loading />}
    </>
  );
};

export default EntriesList;
