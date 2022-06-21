import { useMemo } from 'react';
import { Comment as IComment } from 'types';
import { parseHtml } from 'utils/parseHtml';
import { Divider } from '@mui/material';
import Media from '../../Media/Media';
import UserHeader from '../../UI/UserHeader';
import * as S from './Comment.styles';
import { ContentContainer, TextContentContainer } from '../../UI/Containers';

interface CommentProps {
  comment: IComment;
}

const Comment = ({ comment }: CommentProps) => {
  const { body, user, date, media, responses } = comment;
  const parsedBody = useMemo(() => parseHtml(body), [body]);

  return (
    <div>
      <S.CommentContainer>
        <Divider variant='middle' />
        <UserHeader user={user} date={date} />

        <ContentContainer>
          <TextContentContainer>{parsedBody}</TextContentContainer>
          {media && (
            <Media
              sourceUrl={media.url}
              imageUrl={media.previewUrl}
              type={media.type}
              plus18={media.plus18}
              ratio={media.ratio}
              listMode={false}
            />
          )}
        </ContentContainer>
      </S.CommentContainer>

      {responses && (
        <S.ResponsesListContainer>
          {responses.map((r) => (
            <Comment key={r.id} comment={r} />
          ))}
        </S.ResponsesListContainer>
      )}
    </div>
  );
};

export default Comment;