class Account:
    id = int
    name = str
    document = str
    email = str
    paswword = str

    def __init__(self, name, document):
        self.name = name
        self.document = document
