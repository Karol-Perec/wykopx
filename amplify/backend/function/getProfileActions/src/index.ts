/* eslint-disable import/extensions */
import { APIGatewayProxyHandler } from 'aws-lambda';
import { WykopMulti, WykopPaginated, WykopResponse } from '../../../types';
import { mapEntry, mapLink } from '/opt/nodejs/dataUtils';
import { createResponse, get } from '/opt/nodejs/wykopApiUtils';

type GetProfileActionsResponse = WykopResponse<WykopMulti[]> & WykopPaginated;

export const handler: APIGatewayProxyHandler = async ({
  pathParameters,
  queryStringParameters: { username, page },
}) => {
  if (!pathParameters?.username) {
    return createResponse('Missing username', 400);
  }

  return get<GetProfileActionsResponse>(
    `/profiles/actions/${username}/page/${(+page || 1) + 1}/return/comments`,
    ({ data }) => ({
      items: data.map((m) => (m.type === 'link' ? mapLink(m.link) : mapEntry(m.entry, true))),
    })
  );
};
