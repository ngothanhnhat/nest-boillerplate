import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { isEmail } from 'class-validator';

/**
 * Email Validation Pipe
 *
 * Validates email passed in request parameters.
 */
@Injectable()
export class EmailValidationPipe implements PipeTransform {
  /**
   * Instance of class-validator
   *
   * Can not be easily injected, and there's no need to do so as we
   * only use it for uuid validation method.
   */

  /**
   * When user requests an entity with invalid email we must return 400
   * error before reaching into the database.
   */
  public transform(value: string, metadata: ArgumentMetadata): string {
    if (!isEmail(value)) {
      throw new BadRequestException(
        `${metadata.data || 'value'} must be an email`,
      );
    }

    return value;
  }
}
