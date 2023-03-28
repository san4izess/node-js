import string


def count_words_and_sentences(file_path):
    with open(file_path, "r") as file:
        content = file.read()

    # Count words
    words = content.split()
    word_count = len(words)

    # Count sentences
    sentence_count = 0
    for char in content:
        if char in [".", "!", "?"]:
            sentence_count += 1

    # Exclude some special cases to make it more accurate
    exclude_sentences = ["Mr.", "Mrs.", "Ms.", "Dr.", "e.g.", "i.e."]
    for excl in exclude_sentences:
        sentence_count -= content.count(excl)

    # Print results
    print("Word count:", word_count)
    print("Sentence count:", sentence_count)


# Example usage
count_words_and_sentences("example.txt")
