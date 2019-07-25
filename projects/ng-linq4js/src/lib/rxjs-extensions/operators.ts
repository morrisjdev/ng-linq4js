import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

/**
 * Executes actions defined in the command-string
 * @param command The command-string for execution
 */
export const Evaluate = <T>(command: string) =>
  (input: Observable<T[]>): Observable<any> => input.pipe(map((array: T[]) => {
    return array.Evaluate(command);
  }));

/**
 * Creates a copy of the array
 */
export const Clone = <T>() =>
  (input: Observable<T[]>): Observable<T[]> => input.pipe(map((array: T[]) => {
    return array.Clone();
  }));

/**
 * Gets the index of the first item found by a filter
 * @param filter A function (or function-string) that returns a boolean when matching element was found
 */
export const FindIndex = <T>(filter: ((item: T) => boolean) | string) =>
  (input: Observable<T[]>): Observable<number> => input.pipe(map((array: T[]) => {
    return array.FindIndex(filter);
  }));

/**
 * Gets the index of the last item found by a filter
 * @param filter A function (or function-string) that returns a boolean when matching element was found
 */
export const FindLastIndex = <T>(filter: ((item: T) => boolean) | string) =>
  (input: Observable<T[]>): Observable<number> => input.pipe(map((array: T[]) => {
    return array.FindLastIndex(filter);
  }));

/**
 * Gets the item with the index
 * @param index Item index
 */
export const Get = <T>(index: number) =>
  (input: Observable<T[]>): Observable<T> => input.pipe(map((array: T[]) => {
    return array.Get(index);
  }));

/**
 * Executes a method for each item in the array
 * @param action A function (or function-string) that gets executed for each element. If it returns false the loop stops.
 */
export const ForEach = <T>(action: ((item: T, index?: number) => boolean | any) | string) =>
  (input: Observable<T[]>): Observable<T[]> => input.pipe(map((array: T[]) => {
    return array.ForEach(action);
  }));

/**
 * Searches for all items in array that match the given filter
 * @param filter A function (or function-string) that returns a boolean when matching element was found
 */
export const Where = <T>(filter: ((item: T, index?: number) => boolean) | string) =>
  (input: Observable<T[]>): Observable<T[]> => input.pipe(map((array: T[]) => {
    return array.Where(filter);
  }));

/**
 * Takes items in a specific range
 * @param start The start position
 * @param length The number of elements to take
 */
export const Range = <T>(start: number, length: number) =>
  (input: Observable<T[]>): Observable<T[]> => input.pipe(map((array: T[]) => {
    return array.Range(start, length);
  }));

/**
 * Repeats an object in the array
 * @param object The object to repeat
 * @param count The count of repeats
 */
export const Repeat = <T>(object: T, count: number) =>
  (input: Observable<T[]>): Observable<T[]> => input.pipe(map((array: T[]) => {
    return array.Repeat(object, count);
  }));

/**
 * Returns the length of the array
 * @param filter If set the function returns count of elements matched by the condition
 */
export const Count = <T>(filter?: ((item: T) => boolean) | string) =>
  (input: Observable<T[]>): Observable<number> => input.pipe(map((array: T[]) => {
    return array.Count(filter);
  }));

/**
 * Tests if all items in the array match the condition
 * @param filter A function (or function-string) that returns a boolean when matching element was found
 */
export const All = <T>(filter?: ((item: T) => boolean) | string) =>
  (input: Observable<T[]>): Observable<boolean> => input.pipe(map((array: T[]) => {
    return array.All(filter);
  }));

/**
 * Tests if any item is in the array
 * @param filter If set the function tests if any item in the array matches the condition
 */
export const Any = <T>(filter?: ((item: T) => boolean) | string) =>
  (input: Observable<T[]>): Observable<boolean> => input.pipe(map((array: T[]) => {
    return array.Any(filter);
  }));

/**
 * Returns the first item of the array - returns `null` if no suitable item was found
 * @param filter If set the function returns the first item that matches the filter
 */
export const First = <T>(filter?: ((item: T) => boolean) | string) =>
  (input: Observable<T[]>): Observable<T | null> => input.pipe(map((array: T[]) => {
    return array.FirstOrDefault(filter);
  }));

/**
 * Returns the only item of the array - Throws an exception if not only one item is in array
 * @param filter If set the function returns the only item that matches the filter
 */
export const Single = <T>(filter?: ((item: T) => boolean) | string) =>
  (input: Observable<T[]>): Observable<T | null> => input.pipe(map((array: T[]) => {
    return array.SingleOrDefault(filter);
  }));

/**
 * Returns the last item of the array - returns `null` if no suitable item was found
 * @param filter If set the function returns the last item that matches the filter
 */
export const Last = <T>(filter?: ((item: T) => boolean) | string) =>
  (input: Observable<T[]>): Observable<T | null> => input.pipe(map((array: T[]) => {
    return array.LastOrDefault(filter);
  }));

/**
 * Select the properties for a new array
 * @param selector A function (or a function-string) that returns a new object
 */
export const Select = <T, Y>(selector: ((item: T) => Y) | string) =>
  (input: Observable<T[]>): Observable<Y[]> => input.pipe(map((array: T[]) => {
    return array.Select(selector);
  }));

/**
 * Select the properties with an array as value and concats them
 * @param selector A function (or a function-string) that returns the array with elements to select
 */
export const SelectMany = <T, Y>(selector: ((item: T) => Y[]) | string) =>
  (input: Observable<T[]>): Observable<Y[]> => input.pipe(map((array: T[]) => {
    return array.SelectMany(selector);
  }));

/**
 * Limits the number of entries taken
 * @param count The count of elements taken
 */
export const Take = <T>(count: number) =>
  (input: Observable<T[]>): Observable<T[]> => input.pipe(map((array: T[]) => {
    return array.Take(count);
  }));

/**
 * Takes entries as long as a condition is true
 * @param condition The condition-function (or function-string) that returns a boolean. All elements until a false gets thrown are taken
 * @param initial A initial-function (or function-string) that gets executed once at the start of the loop
 * @param after A function that gets executed after every element-iteration after the condition-function was evaluated
 */
export const TakeWhile = <T>(
  condition: ((item: T, storage?: any) => boolean) | string,
  initial?: ((storage: any) => void) | string,
  after?: ((item: T, storage: any) => void) | string) =>
  (input: Observable<T[]>): Observable<T[]> => input.pipe(map((array: T[]) => {
    return array.TakeWhile(condition, initial, after);
  }));

/**
 * Skips entries
 * @param count The count of elements skipped
 */
export const Skip = <T>(count: number) =>
  (input: Observable<T[]>): Observable<T[]> => input.pipe(map((array: T[]) => {
    return array.Skip(count);
  }));

/**
 * Orders array by property or value in ascending direction
 * @param valueSelector The selector-function (or function-string) that selects the property for sorting
 */
export const OrderBy = <T>(valueSelector: ((item: T) => any) | string) =>
  (input: Observable<T[]>): Observable<T[]> => input.pipe(map((array: T[]) => {
    return array.OrderBy(valueSelector);
  }));

/**
 * Orders array by additional properties in ascending direction in combination with OrderBy/OrderByDescending
 * @param valueSelector The selector-function (or function-string) that selects the property for sorting
 */
export const ThenBy = <T>(valueSelector: ((item: T) => any) | string) =>
  (input: Observable<T[]>): Observable<T[]> => input.pipe(map((array: T[]) => {
    return array.ThenBy(valueSelector);
  }));

/**
 * Orders array by property or value in descending direction
 * @param valueSelector The selector-function (or function-string) that selects the property for sorting
 */
export const OrderByDescending = <T>(valueSelector: ((item: T) => any) | string) =>
  (input: Observable<T[]>): Observable<T[]> => input.pipe(map((array: T[]) => {
    return array.OrderByDescending(valueSelector);
  }));

/**
 * Orders array by additional properties in descending direction in combination with OrderBy/OrderByDescending
 * @param valueSelector The selector-function (or function-string) that selects the property for sorting
 */
export const ThenByDescending = <T>(valueSelector: ((item: T) => any) | string) =>
  (input: Observable<T[]>): Observable<T[]> => input.pipe(map((array: T[]) => {
    return array.ThenByDescending(valueSelector);
  }));

/**
 * Returns the smallest element in array
 * @param valueSelector The selector-function (or function-string) that selects the property for comparison
 */
export const Min = <T>(valueSelector?: ((item: T) => any) | string) =>
  (input: Observable<T[]>): Observable<T> => input.pipe(map((array: T[]) => {
    return array.Min(valueSelector);
  }));

/**
 * Returns the greates element in array
 * @param valueSelector The selector-function (or function-string) that selects the property for comparison
 */
export const Max = <T>(valueSelector?: ((item: T) => any) | string) =>
  (input: Observable<T[]>): Observable<T> => input.pipe(map((array: T[]) => {
    return array.Max(valueSelector);
  }));

/**
 * Groups array by property
 * @param valueSelector The selector-function (or function-string) that selects the property for grouping
 */
export const GroupBy = <T>(valueSelector: ((item: T) => any) | string) =>
  (input: Observable<T[]>): Observable<T[][]> => input.pipe(map((array: T[]) => {
    return array.GroupBy(valueSelector);
  }));

/**
 * Makes all values unique
 * @param valueSelector A selector-function (or function-string) to select property for comparison and distinction
 */
export const Distinct = <T>(valueSelector?: ((item: T) => any) | string) =>
  (input: Observable<T[]>): Observable<T[]> => input.pipe(map((array: T[]) => {
    return array.Distinct(valueSelector);
  }));

/**
 * Tests if array contains specific object
 * @param object The object to test for
 */
export const Contains = <T>(object: T) =>
  (input: Observable<T[]>): Observable<boolean> => input.pipe(map((array: T[]) => {
    return array.Contains(object);
  }));

/**
 * Combines two arrays
 * @param newArray The array to combine
 */
export const Concat = <T>(newArray: T[]) =>
  (input: Observable<T[]>): Observable<T[]> => input.pipe(map((array: T[]) => {
    return array.Concat(newArray);
  }));

/**
 * Combines two arrays but only applies values that are in both arrays
 * @param newArray The array to combine
 */
export const Intersect = <T>(newArray: T[]) =>
  (input: Observable<T[]>): Observable<T[]> => input.pipe(map((array: T[]) => {
    return array.Intersect(newArray);
  }));

/**
 * Joins the entries by a given char
 * @param character The character for joining
 * @param selector A selector-function (or function-string) to select property for joining
 */
export const Join = <T>(character: string, selector?: ((item: T) => any) | string) =>
  (input: Observable<T[]>): Observable<string> => input.pipe(map((array: T[]) => {
    return array.Join(character, selector);
  }));

/**
 * Combines the entries using a custom function
 * @param method A function (or function-string) for aggregation
 * @param startVal The value to start aggregation
 */
export const Aggregate = <T>(method: ((result: any, item: T) => any) | string, startVal?: any) =>
  (input: Observable<T[]>): Observable<string> => input.pipe(map((array: T[]) => {
    return array.Aggregate(method, startVal);
  }));

/**
 * Reverses the array
 */
export const Reverse = <T>() =>
  (input: Observable<T[]>): Observable<T[]> => input.pipe(map((array: T[]) => {
    return array.Reverse();
  }));

/**
 * Computes the average of the elements
 * @param selector A selector-function (or function-string) to select property for average computing
 * @param filter If set the function computes the average of elements that match the filter
 */
export const Average = <T>(selector?: ((item: T) => any) | string, filter?: ((item: T) => boolean) | string) =>
  (input: Observable<T[]>): Observable<number> => input.pipe(map((array: T[]) => {
    return array.Average(selector, filter);
  }));

/**
 * Computes the sum of the elements
 * @param selector A selector-function (or function-string) to select property for adding
 * @param filter If set the function computes the sum of elements that match the filter
 */
export const Sum = <T>(selector?: ((item: T) => any) | string, filter?: ((item: T) => boolean) | string) =>
  (input: Observable<T[]>): Observable<number> => input.pipe(map((array: T[]) => {
    return array.Sum(selector, filter);
  }));

/**
 * Compares to sequences of objects
 * @param newArray The array to compare
 */
export const SequenceEqual = <T>(newArray: T[]) =>
  (input: Observable<T[]>): Observable<boolean> => input.pipe(map((array: T[]) => {
    return array.SequenceEqual(newArray);
  }));

/**
 * Combines the entries of two arrays using a custom function
 * @param newArray The array to combine
 * @param result The function (or function-string) to combine elements
 */
export const Zip = <T, X, Y>(newArray: X[], result: ((first: T, second: X) => Y) | string) =>
  (input: Observable<T[]>): Observable<Y[]> => input.pipe(map((array: T[]) => {
    return array.Zip(newArray, result);
  }));

/**
 * Combines two arrays without duplicates
 * @param newArray The array to combine
 */
export const Union = <T>(newArray: T[]) =>
  (input: Observable<T[]>): Observable<T[]> => input.pipe(map((array: T[]) => {
    return array.Union(newArray);
  }));

/**
 * Converts the array to a dictionary
 * @param keySelector The selector-function (or function-string) to select property for key
 * @param valueSelector A selector-function (or function-string) to select property for value
 */
export const ToDictionary = <T, Y>(keySelector: ((item: T) => (string | number)) | string, valueSelector?: ((item: T) => Y) | string) =>
  (input: Observable<T[]>): Observable<{ [prop: string]: Y; [prop: number]: Y; }> => input.pipe(map((array: T[]) => {
    return array.ToDictionary(keySelector, valueSelector);
  }));
