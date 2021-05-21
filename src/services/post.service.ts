import { getConnection } from "typeorm";
import { PostEntity } from "../database/entities/post.entity";
import { PostRepository } from "../repository/post.repository";

export class PostService {
  private postRepository: PostRepository;

  constructor() {
    this.postRepository =
      getConnection("blog").getCustomRepository(PostRepository);
  }

  public index = async () => {
    const posts = await this.postRepository.find();
    return posts;
  };

  public create = async (post: PostEntity) => {
    const newPost = await this.postRepository.save(post);
    return newPost;
  };

  public update = () => {
    return "Update from service";
  };

  public delete = () => {
    return "delete from service";
  };
}
