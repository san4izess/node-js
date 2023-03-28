
def test_count_words_and_sentences():
    file_path = "example.txt"
    count_words_and_sentences(file_path)

    # Check if word count is correct
    with open(file_path, "r") as file:
        content = file.read()
        words = content.split()
        expected_word_count = len(words)
    assert word_count == expected_word_count

    # Check if sentence count is correct
    expected_sentence_count = content.count(
        ".") + content.count("!") + content.count("?")  # naive count
    for excl in exclude_sentences:
        expected_sentence_count -= content.count(excl)
    assert sentence_count == expected_sentence_count
