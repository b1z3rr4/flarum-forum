import { Discussion } from '../interfaces/discussion';
import { Attributes } from '../interfaces/user';
import { Included } from '../interfaces/utils';

export class DiscussionMapper {
  static toDomain(discussion: Discussion, included: Included<Attributes>[]): Discussion {
    const userAttributes = included
      .filter(({ type }) => type === 'users')
      .find((user) => user.id === discussion.relationships?.user.data.id) as unknown as Included<Attributes>;

    return {
      ...discussion,
      relationships: {
        ...discussion.relationships,
        user: {
          data: {
            ...discussion.relationships?.user.data,
            attributes: userAttributes.attributes,
          } as Included<Attributes>,
        },
      },
    };
  }
}
