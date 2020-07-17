import { File } from './file';



/**
 * Represents a directory in the file system.
 */
export interface Directory {

    name: string;
    subdirectories: Directory[];
    files: File[];

}
